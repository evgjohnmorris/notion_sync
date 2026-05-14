/**
 * Generated Tool: blocksTool_0233
 * Domain: Blocks
 * ID: 0233
 */
exports.blocksTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0233:', error);
    throw error;
  }
};
