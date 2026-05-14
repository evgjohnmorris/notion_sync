/**
 * Generated Tool: blocksTool_0185
 * Domain: Blocks
 * ID: 0185
 */
exports.blocksTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0185:', error);
    throw error;
  }
};
