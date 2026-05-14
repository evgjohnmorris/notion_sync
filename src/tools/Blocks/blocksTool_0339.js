/**
 * Generated Tool: blocksTool_0339
 * Domain: Blocks
 * ID: 0339
 */
exports.blocksTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0339:', error);
    throw error;
  }
};
