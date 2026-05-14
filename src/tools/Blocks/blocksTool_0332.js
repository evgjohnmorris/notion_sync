/**
 * Generated Tool: blocksTool_0332
 * Domain: Blocks
 * ID: 0332
 */
exports.blocksTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0332:', error);
    throw error;
  }
};
