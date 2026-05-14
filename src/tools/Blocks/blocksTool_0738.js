/**
 * Generated Tool: blocksTool_0738
 * Domain: Blocks
 * ID: 0738
 */
exports.blocksTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0738:', error);
    throw error;
  }
};
