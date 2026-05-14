/**
 * Generated Tool: blocksTool_0578
 * Domain: Blocks
 * ID: 0578
 */
exports.blocksTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0578:', error);
    throw error;
  }
};
