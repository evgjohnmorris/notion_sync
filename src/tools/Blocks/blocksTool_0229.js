/**
 * Generated Tool: blocksTool_0229
 * Domain: Blocks
 * ID: 0229
 */
exports.blocksTool_0229 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0229:', error);
    throw error;
  }
};
