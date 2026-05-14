/**
 * Generated Tool: blocksTool_0348
 * Domain: Blocks
 * ID: 0348
 */
exports.blocksTool_0348 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0348:', error);
    throw error;
  }
};
