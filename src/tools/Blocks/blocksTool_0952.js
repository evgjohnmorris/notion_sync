/**
 * Generated Tool: blocksTool_0952
 * Domain: Blocks
 * ID: 0952
 */
exports.blocksTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0952:', error);
    throw error;
  }
};
