/**
 * Generated Tool: blocksTool_0062
 * Domain: Blocks
 * ID: 0062
 */
exports.blocksTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0062:', error);
    throw error;
  }
};
