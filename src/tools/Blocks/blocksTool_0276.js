/**
 * Generated Tool: blocksTool_0276
 * Domain: Blocks
 * ID: 0276
 */
exports.blocksTool_0276 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0276:', error);
    throw error;
  }
};
