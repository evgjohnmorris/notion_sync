/**
 * Generated Tool: blocksTool_0976
 * Domain: Blocks
 * ID: 0976
 */
exports.blocksTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0976:', error);
    throw error;
  }
};
