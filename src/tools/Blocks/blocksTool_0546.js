/**
 * Generated Tool: blocksTool_0546
 * Domain: Blocks
 * ID: 0546
 */
exports.blocksTool_0546 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0546:', error);
    throw error;
  }
};
