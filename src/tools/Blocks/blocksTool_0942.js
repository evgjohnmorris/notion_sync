/**
 * Generated Tool: blocksTool_0942
 * Domain: Blocks
 * ID: 0942
 */
exports.blocksTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0942:', error);
    throw error;
  }
};
