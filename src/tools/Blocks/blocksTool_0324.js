/**
 * Generated Tool: blocksTool_0324
 * Domain: Blocks
 * ID: 0324
 */
exports.blocksTool_0324 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0324:', error);
    throw error;
  }
};
