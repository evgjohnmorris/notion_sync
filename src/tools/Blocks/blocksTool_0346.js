/**
 * Generated Tool: blocksTool_0346
 * Domain: Blocks
 * ID: 0346
 */
exports.blocksTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0346:', error);
    throw error;
  }
};
