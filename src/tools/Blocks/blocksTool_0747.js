/**
 * Generated Tool: blocksTool_0747
 * Domain: Blocks
 * ID: 0747
 */
exports.blocksTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0747:', error);
    throw error;
  }
};
