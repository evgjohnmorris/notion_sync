/**
 * Generated Tool: blocksTool_0510
 * Domain: Blocks
 * ID: 0510
 */
exports.blocksTool_0510 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0510:', error);
    throw error;
  }
};
