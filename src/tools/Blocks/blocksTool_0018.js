/**
 * Generated Tool: blocksTool_0018
 * Domain: Blocks
 * ID: 0018
 */
exports.blocksTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0018:', error);
    throw error;
  }
};
