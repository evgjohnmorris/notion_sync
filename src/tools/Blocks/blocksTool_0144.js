/**
 * Generated Tool: blocksTool_0144
 * Domain: Blocks
 * ID: 0144
 */
exports.blocksTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0144:', error);
    throw error;
  }
};
