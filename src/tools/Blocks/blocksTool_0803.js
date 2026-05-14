/**
 * Generated Tool: blocksTool_0803
 * Domain: Blocks
 * ID: 0803
 */
exports.blocksTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0803:', error);
    throw error;
  }
};
