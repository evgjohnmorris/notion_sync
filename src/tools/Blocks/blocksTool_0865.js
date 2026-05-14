/**
 * Generated Tool: blocksTool_0865
 * Domain: Blocks
 * ID: 0865
 */
exports.blocksTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0865:', error);
    throw error;
  }
};
