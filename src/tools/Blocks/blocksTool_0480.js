/**
 * Generated Tool: blocksTool_0480
 * Domain: Blocks
 * ID: 0480
 */
exports.blocksTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0480:', error);
    throw error;
  }
};
