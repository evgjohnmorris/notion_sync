/**
 * Generated Tool: blocksTool_0571
 * Domain: Blocks
 * ID: 0571
 */
exports.blocksTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0571:', error);
    throw error;
  }
};
