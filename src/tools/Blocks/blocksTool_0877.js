/**
 * Generated Tool: blocksTool_0877
 * Domain: Blocks
 * ID: 0877
 */
exports.blocksTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0877:', error);
    throw error;
  }
};
