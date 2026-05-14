/**
 * Generated Tool: blocksTool_0198
 * Domain: Blocks
 * ID: 0198
 */
exports.blocksTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0198:', error);
    throw error;
  }
};
