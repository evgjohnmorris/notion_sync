/**
 * Generated Tool: databasesTool_0263
 * Domain: Databases
 * ID: 0263
 */
exports.databasesTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0263:', error);
    throw error;
  }
};
