/**
 * Generated Tool: blocksTool_0342
 * Domain: Blocks
 * ID: 0342
 */
exports.blocksTool_0342 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0342:', error);
    throw error;
  }
};
