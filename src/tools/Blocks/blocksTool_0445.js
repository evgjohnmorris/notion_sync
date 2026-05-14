/**
 * Generated Tool: blocksTool_0445
 * Domain: Blocks
 * ID: 0445
 */
exports.blocksTool_0445 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0445:', error);
    throw error;
  }
};
