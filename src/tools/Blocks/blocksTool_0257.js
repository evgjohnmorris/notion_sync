/**
 * Generated Tool: blocksTool_0257
 * Domain: Blocks
 * ID: 0257
 */
exports.blocksTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0257:', error);
    throw error;
  }
};
