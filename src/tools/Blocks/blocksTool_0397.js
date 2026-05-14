/**
 * Generated Tool: blocksTool_0397
 * Domain: Blocks
 * ID: 0397
 */
exports.blocksTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0397:', error);
    throw error;
  }
};
