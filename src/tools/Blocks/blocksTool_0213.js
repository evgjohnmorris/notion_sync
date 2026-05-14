/**
 * Generated Tool: blocksTool_0213
 * Domain: Blocks
 * ID: 0213
 */
exports.blocksTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0213:', error);
    throw error;
  }
};
