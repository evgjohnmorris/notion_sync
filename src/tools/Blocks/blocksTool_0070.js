/**
 * Generated Tool: blocksTool_0070
 * Domain: Blocks
 * ID: 0070
 */
exports.blocksTool_0070 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0070:', error);
    throw error;
  }
};
