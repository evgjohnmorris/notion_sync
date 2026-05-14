/**
 * Generated Tool: blocksTool_0331
 * Domain: Blocks
 * ID: 0331
 */
exports.blocksTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0331:', error);
    throw error;
  }
};
