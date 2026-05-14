/**
 * Generated Tool: blocksTool_0191
 * Domain: Blocks
 * ID: 0191
 */
exports.blocksTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0191:', error);
    throw error;
  }
};
