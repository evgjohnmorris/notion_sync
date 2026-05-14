/**
 * Generated Tool: blocksTool_0392
 * Domain: Blocks
 * ID: 0392
 */
exports.blocksTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0392:', error);
    throw error;
  }
};
