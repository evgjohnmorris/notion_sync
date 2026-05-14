/**
 * Generated Tool: blocksTool_0760
 * Domain: Blocks
 * ID: 0760
 */
exports.blocksTool_0760 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0760:', error);
    throw error;
  }
};
