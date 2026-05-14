/**
 * Generated Tool: blocksTool_0225
 * Domain: Blocks
 * ID: 0225
 */
exports.blocksTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0225:', error);
    throw error;
  }
};
