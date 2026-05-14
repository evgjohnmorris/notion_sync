/**
 * Generated Tool: blocksTool_0657
 * Domain: Blocks
 * ID: 0657
 */
exports.blocksTool_0657 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0657:', error);
    throw error;
  }
};
