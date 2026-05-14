/**
 * Generated Tool: blocksTool_0209
 * Domain: Blocks
 * ID: 0209
 */
exports.blocksTool_0209 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0209:', error);
    throw error;
  }
};
