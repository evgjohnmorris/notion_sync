/**
 * Generated Tool: blocksTool_0161
 * Domain: Blocks
 * ID: 0161
 */
exports.blocksTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0161:', error);
    throw error;
  }
};
