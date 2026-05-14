/**
 * Generated Tool: blocksTool_0239
 * Domain: Blocks
 * ID: 0239
 */
exports.blocksTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0239:', error);
    throw error;
  }
};
