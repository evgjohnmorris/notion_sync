/**
 * Generated Tool: blocksTool_0319
 * Domain: Blocks
 * ID: 0319
 */
exports.blocksTool_0319 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0319:', error);
    throw error;
  }
};
