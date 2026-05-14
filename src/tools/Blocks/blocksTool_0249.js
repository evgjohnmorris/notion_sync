/**
 * Generated Tool: blocksTool_0249
 * Domain: Blocks
 * ID: 0249
 */
exports.blocksTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0249:', error);
    throw error;
  }
};
