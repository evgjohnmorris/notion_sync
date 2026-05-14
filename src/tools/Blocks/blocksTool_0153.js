/**
 * Generated Tool: blocksTool_0153
 * Domain: Blocks
 * ID: 0153
 */
exports.blocksTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0153:', error);
    throw error;
  }
};
