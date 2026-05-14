/**
 * Generated Tool: blocksTool_0263
 * Domain: Blocks
 * ID: 0263
 */
exports.blocksTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0263:', error);
    throw error;
  }
};
