/**
 * Generated Tool: blocksTool_0421
 * Domain: Blocks
 * ID: 0421
 */
exports.blocksTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0421:', error);
    throw error;
  }
};
