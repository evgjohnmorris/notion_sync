/**
 * Generated Tool: blocksTool_0799
 * Domain: Blocks
 * ID: 0799
 */
exports.blocksTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0799:', error);
    throw error;
  }
};
