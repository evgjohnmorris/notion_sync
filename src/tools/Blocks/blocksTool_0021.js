/**
 * Generated Tool: blocksTool_0021
 * Domain: Blocks
 * ID: 0021
 */
exports.blocksTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0021:', error);
    throw error;
  }
};
