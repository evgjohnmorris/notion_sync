/**
 * Generated Tool: blocksTool_0509
 * Domain: Blocks
 * ID: 0509
 */
exports.blocksTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0509:', error);
    throw error;
  }
};
