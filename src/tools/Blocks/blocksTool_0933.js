/**
 * Generated Tool: blocksTool_0933
 * Domain: Blocks
 * ID: 0933
 */
exports.blocksTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0933:', error);
    throw error;
  }
};
