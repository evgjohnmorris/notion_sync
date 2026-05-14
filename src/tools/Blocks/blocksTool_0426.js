/**
 * Generated Tool: blocksTool_0426
 * Domain: Blocks
 * ID: 0426
 */
exports.blocksTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0426:', error);
    throw error;
  }
};
