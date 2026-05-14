/**
 * Generated Tool: blocksTool_0125
 * Domain: Blocks
 * ID: 0125
 */
exports.blocksTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0125:', error);
    throw error;
  }
};
