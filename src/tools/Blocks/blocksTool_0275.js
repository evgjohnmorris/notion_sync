/**
 * Generated Tool: blocksTool_0275
 * Domain: Blocks
 * ID: 0275
 */
exports.blocksTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0275:', error);
    throw error;
  }
};
